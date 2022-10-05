CREATE TABLE [IF NOT EXISTS] public.comment (
	"_id" SERIAL NOT NULL,
	"post_id" INT NOT NULL,
	"user_id" INT NOT NULL,
    "text" VARCHAR NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
    FOREIGN KEY ("post_id") REFERENCES public.post(post_pk),
    FOREIGN KEY ("user_id") REFERENCES public.user(user_pk),
	CONSTRAINT "post_pk" PRIMARY KEY ("_id")
)

-- INSERT INTO public.user(
-- 	username,
-- 	password,
-- 	email,
-- 	address
-- )
-- VALUES(
-- 	'test',
-- 	'password',
-- 	'test@gmail.com',
-- 	'test address'
-- );