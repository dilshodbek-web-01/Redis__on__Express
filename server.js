import express from "express";
import { createClient } from "redis";
import { read_file, write_file } from "./fs/fs_api.js";
import * as uuid from "uuid";
const app = express();

app.use(express.json());
const redisClient = createClient({ url: "redis://127.0.0.1:6379" });

app.get("/users", async (req, res) => {
  try {
    redisClient.connect().then(() => console.log("redis connect!"));

    const cachedUser = await redisClient.get("users");

    if (!cachedUser) {
      const users = read_file("users.json");
      await redisClient.set("users", JSON.stringify(users));
      res.json(users);
      return;
    }

    res.json(JSON.parse(cachedUser));
  } finally {
    console.log("quit...");
    redisClient.quit();
  }
});

app.post("/user", async (req, res) => {
  try {
    redisClient.connect().then(() => console.log("redis connect!"));

    const { name, age } = req.body;

    const cachedUser = await redisClient.get("users");

    const userId = uuid.v4();
    const new_user = {
      id: userId,
      name,
      age,
    };
    if (!cachedUser) {
      let users = read_file("users.json");

      users.push(new_user);

      write_file("users.json", JSON.stringify(users));

      await redisClient.set("users", JSON.stringify(users));

      return res.json("Create new user!");
    }

    let parseUser = JSON.parse(cachedUser);

    parseUser.push(new_user);

    await redisClient.set("users", JSON.stringify(parseUser));
    write_file("users.json", parseUser);
    res.send("Created!");
  } finally {
    console.log("quit...");
    redisClient.quit();
  }
});

app.post("/delete_user", async (req, res) => {
  try {
    redisClient.connect().then(() => console.log("redis connect!"));
    const { user_id } = req.body;

    let users = read_file("users.json");
    let cacheUser = JSON.parse(await redisClient.get("users"));

    users.forEach((u, idx) => {
      if (u.id === user_id) {
        users.splice(idx, 1);
      }
    });

    write_file("users.json", users);

    if (!cacheUser) {
      await redisClient.set("users", JSON.stringify(users));
      return res.send("Deleted user!");
    }

    // redis
    cacheUser.forEach((u, idx) => {
      if (u.id === user_id) {
        cacheUser.splice(idx, 1);
      }
    });

    await redisClient.set("users", JSON.stringify(cacheUser));

    res.json("User o`chirildi!");
  } finally {
    console.log("quit...");
    redisClient.quit();
  }
});

app.listen(3030, () => {
  console.log(3030);
});
