BEGIN;

CREATE ROLE studentmgr WITH LOGIN PASSWORD 'studentmgr';
ALTER DATABASE studentmgr OWNER TO studentmgr;

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name_first varchar,
    name_last varchar,
    created_at timestamp default now(),
    updated_at timestamp default now()
);

GRANT ALL ON students to studentmgr;
GRANT ALL ON SEQUENCE students_id_seq TO PUBLIC;

COMMIT;