/*
  Ubuntu da redisni o`rnatish
  mongodbni o`rnatish
    - https://stackoverflow.com/questions/51417708/unable-to-install-mongodb-properly-on-ubuntu-18-04-lts

  redis install
    - sudo apt-get update
    - sudo apt install redis
    - redis-cli --version
    - redis-cli
*/

/*

Windows da o`rnatish

 redis msi download windows
   https://github.com/MicrosoftArchive/redis/releases/download/win-3.2.100/Redis-x64-3.2.100.msi

*/

/*
  
   redis commands
      - clear
      - set key value       -> setting value into cache
      - set key value ex 10 -> 10 sekund vaqt oralig`ida valuni saqlash
      - ttl key             -> sekund vaqtini bilish
      - get key             -> getting 
      - del key             -> key orqali o`chirish
      - flushall            -> casheni tozalash

      - mset a 1 b 2 c 3    -> bir nechta o`zgaruvchilarga qiymat berish
      - mget a b c          -> bir nechta o`zgaruvchilarni massiv sifatida qaytarish


*/

/*
    redisda obyectlar bilan ishlash

    Object saqlash
      - hset obj name Anvar
      - hset obj surname Shermatov
      - hset obj age 23

    Objectni olish
      - hget obj name
      - hgetall obj 

*/

/*
  Array
    - lpush cars matiz
    - lpush cars damas     -> ['damas', 'matiz']
    - rpush cars maliba    -> ['damas', 'matiz', 'maliba']
    - rpush mylist 1 2 3 4 5
    - rpop nums
    - del nums
    - lrange cars 0 -1     -> massiv hamma elementlarini chiqarish

*/

/*
   type key -> o`zgaruvchi typeni tekshirish 
*/

/*
   sadd mylist 1 2 3  -> element qo`shish.
   smembers mylist    -> element ro`yxatini chiqarish.
   sismember mylist 3 -> 3 element bo`lsa 1 qaytadi. Aks holda 0.

*/
