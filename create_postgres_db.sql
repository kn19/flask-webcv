-- Table: public.address

-- DROP TABLE public.address;

CREATE TABLE public.address
(
    id bigint NOT NULL DEFAULT nextval('address_id_seq'::regclass),
    street1 character varying(100) COLLATE pg_catalog."default",
    street2 character varying(100) COLLATE pg_catalog."default",
    city character varying(40) COLLATE pg_catalog."default",
    state character varying(40) COLLATE pg_catalog."default",
    zipcode integer,
    country character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT address_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.appimages

-- DROP TABLE public.appimages;

CREATE TABLE public.appimages
(
    id bigint NOT NULL DEFAULT nextval('appimages_id_seq'::regclass),
    image bytea,
    image_type character varying(40) COLLATE pg_catalog."default",
    image_name character varying(80) COLLATE pg_catalog."default",
    CONSTRAINT appimages_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.coursework

-- DROP TABLE public.coursework;

CREATE TABLE public.coursework
(
    id bigint NOT NULL DEFAULT nextval('related_coursework_id_seq'::regclass),
    name character varying(40) COLLATE pg_catalog."default",
    school bigint NOT NULL DEFAULT nextval('related_coursework_school_seq'::regclass),
    CONSTRAINT coursework_pkey PRIMARY KEY (id),
    CONSTRAINT coursework_school_fkey FOREIGN KEY (school)
        REFERENCES public.education (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.education

-- DROP TABLE public.education;

CREATE TABLE public.education
(
    id bigint NOT NULL DEFAULT nextval('education_id_seq'::regclass),
    school character varying(40) COLLATE pg_catalog."default" NOT NULL,
    start_date character varying(40) COLLATE pg_catalog."default",
    end_date character varying(40) COLLATE pg_catalog."default",
    expected_end_date character varying(40) COLLATE pg_catalog."default",
    location character varying(40) COLLATE pg_catalog."default",
    gpa character varying(40) COLLATE pg_catalog."default",
    credits character varying(40) COLLATE pg_catalog."default",
    major character varying(40) COLLATE pg_catalog."default",
    degree character varying(40) COLLATE pg_catalog."default",
    CONSTRAINT education_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.experience

-- DROP TABLE public.experience;

CREATE TABLE public.experience
(
    id bigint NOT NULL DEFAULT nextval('experience_id_seq'::regclass),
    company character varying(40) COLLATE pg_catalog."default" NOT NULL,
    start_date character varying(40) COLLATE pg_catalog."default",
    end_date character varying(40) COLLATE pg_catalog."default",
    logo character varying(40) COLLATE pg_catalog."default",
    location character varying(40) COLLATE pg_catalog."default",
    title character varying(40) COLLATE pg_catalog."default",
    summary text COLLATE pg_catalog."default",
    CONSTRAINT experience_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.person

-- DROP TABLE public.person;

CREATE TABLE public.person
(
    id bigint NOT NULL DEFAULT nextval('person_id_seq'::regclass),
    first_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    last_name character varying(20) COLLATE pg_catalog."default" NOT NULL,
    phone_mobile bigint,
    phone_home bigint,
    phone_work bigint,
    email character varying(40) COLLATE pg_catalog."default",
    about_text text COLLATE pg_catalog."default",
    about_html text COLLATE pg_catalog."default",
    summary_text text COLLATE pg_catalog."default",
    summary_html text COLLATE pg_catalog."default",
    CONSTRAINT person_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.project

-- DROP TABLE public.project;

CREATE TABLE public.project
(
    id bigint NOT NULL DEFAULT nextval('project_id_seq'::regclass),
    description text COLLATE pg_catalog."default",
    description_html text COLLATE pg_catalog."default",
    project_id character varying(20) COLLATE pg_catalog."default",
    name character varying(60) COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.skill

-- DROP TABLE public.skill;

CREATE TABLE public.skill
(
    id bigint NOT NULL DEFAULT nextval('skill_id_seq'::regclass),
    name character varying(40) COLLATE pg_catalog."default",
    skillset bigint,
    CONSTRAINT skill_pkey PRIMARY KEY (id),
    CONSTRAINT skill_skillset_fkey FOREIGN KEY (skillset)
        REFERENCES public.skillset (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.skillset

-- DROP TABLE public.skillset;

CREATE TABLE public.skillset
(
    id bigint NOT NULL DEFAULT nextval('skillsets_id_seq'::regclass),
    name character varying(40) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT skillsets_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;


-- Table: public.website

-- DROP TABLE public.website;

CREATE TABLE public.website
(
    id bigint NOT NULL DEFAULT nextval('websites_id_seq'::regclass),
    name character varying(30) COLLATE pg_catalog."default" NOT NULL,
    url character varying(120) COLLATE pg_catalog."default" NOT NULL,
    site_id character varying(30) COLLATE pg_catalog."default",
    CONSTRAINT websites_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

-- Table: public.workitem

-- DROP TABLE public.workitem;

CREATE TABLE public.workitem
(
    id bigint NOT NULL DEFAULT nextval('work_item_id_seq'::regclass),
    description text COLLATE pg_catalog."default",
    company bigint NOT NULL DEFAULT nextval('work_item_company_seq'::regclass),
    CONSTRAINT workitem_pkey PRIMARY KEY (id),
    CONSTRAINT workitem_company_fkey FOREIGN KEY (company)
        REFERENCES public.experience (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;