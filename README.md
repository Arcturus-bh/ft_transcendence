This project has been created as part of the 42 curriculum by bboussad, chuchard, nihamdan and aldalmas.

Description: 

Instructions:
    For WORK on this project:
    -> cd /app/backend/
    -> npm install

    -> cd /app/frontend/
    -> npm install

    For RUN this project: 
    -> make

Resources:



Team Information:
    chuchard: Tech Game Designer
    bboussad: Dev Frontend
    aldalmas: Dev Backend
    nihamdan: Dev Backend



Features list:
- Live chat (2 pts) + live chat avanced (1 pt)
- 



AUTH
    password hashed by bcrypt and salted

BDD
-> ORM (object-relational mapping): prisma. Why ? Clear errors, good with SQLite, and easy to use. Intermediary between code and a simulated POO database. 
-> -> schema.prisma : used for create the database structure. 'prisma migrate dev' cmd read the 'schema.prisma' file, generate 'migration.sql' file and apply it in a real base (dev.db file).

if need to change something in the db (in app/backend/prisma/schema.prisma), you must do this to update changes in app/backend/:
    > rm prisma/dev.db
    > rm -rf prisma/migrations
    > npx prisma migrate dev --name init
