SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.animals (
	"_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"pet_name" varchar NOT NULL,
	"owner" varchar,
	"address" varchar,
	"eye_color" varchar,
	"gender" varchar,
	"image_url" varchar,
	"breed" varchar,
	"fur_color" varchar,
	"last_found" varchar,
	"status" BOOLEAN NOT NULL,
	"phone_number" int

	CONSTRAINT "animals_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE public.users (
	"user_id" serial NOT NULL,
	"username" varchar NOT NULL,
	"password" varchar NOT NULL
);


CREATE TABLE public.sessions (
  "session_id" SERIAL PRIMARY KEY,
  "cookie"   VARCHAR,
  "user_id"  INT
)