CREATE TABLE [IF NOT EXISTS] public.animals (
	"_id" SERIAL NOT NULL,
	"name" VARCHAR NOT NULL,
	"user_id" INT NOT NULL,
	"eye_color" VARCHAR,
	"gender" VARCHAR,
	"image" VARBINARY(256),
	"color" VARCHAR,
	"last_seen" VARCHAR,
    FOREIGN KEY ("user_id") REFERENCES public.user(user_pk),
	CONSTRAINT "animals_pk" PRIMARY KEY ("_id")
)


-- CREATE TABLE public.animals (
--      _id SERIAL NOT NULL,
--      name VARCHAR NOT NULL,
--      user_id INT NOT NULL,
--      eye_color VARCHAR,
--      gender VARCHAR,
--      images BYTEA NOT NULL,
--      color VARCHAR,
--      last_seen VARCHAR,
--     FOREIGN KEY (user_id) REFERENCES public.user(_id),
--     CONSTRAINT animals_pk PRIMARY KEY (_id)
-- );