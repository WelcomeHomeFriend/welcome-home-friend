CREATE TABLE [IF NOT EXISTS] public.user (
	"_id" SERIAL NOT NULL,
	"username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "address" VARCHAR NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
);