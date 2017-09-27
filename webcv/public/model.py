# -*- coding: utf-8 -*-

from webcv.database import Column, Model, db


class Person(Model):
    """ Personal information in the CV. Includes 'about' field for the
    About page and 'summary' field for the short Homepage blurb.
    Both can contain HTML if need to stylize the text on the page."""
    first_name = Column(db.String)
    last_name = Column(db.String)
    phone_mobile = Column(db.Integer)
    phone_home = Column(db.Integer)
    phone_work = Column(db.Integer)
    email = Column(db.String)
    about_text = Column(db.String)
    about_html = Column(db.String)
    summary_text = Column(db.String)
    summary_html = Column(db.String)


class Address(Model):
    """ Address of person """
    street1 = Column(db.String)
    street2 = Column(db.String)
    city = Column(db.String)
    state = Column(db.String)
    zipcode = Column(db.Integer)
    country = Column(db.String)


class Website(Model):
    """ Websites to be used on webpage for external links """
    name = Column(db.String)
    url = Column(db.String)
    site_id = Column(db.String)


class Experience(Model):
    """ Work experience including summary of job """
    company = Column(db.String)
    start_date = Column(db.String)
    end_date = Column(db.String)
    logo = Column(db.String)
    location = Column(db.String)
    title = Column(db.String)
    summary = Column(db.String)


class Workitem(Model):
    """ Individual work items/tasks/achievements for each job """
    description = Column(db.String)
    company = Column(db.Integer)


class Education(Model):
    """ Education history"""
    school = Column(db.String)
    start_date = Column(db.String)
    end_date = Column(db.String)
    expected_end_date = Column(db.String)
    location = Column(db.String)
    gpa = Column(db.String)
    credits = Column(db.String)
    major = Column(db.String)
    degree = Column(db.String)


class Coursework(Model):
    """ Individual coursework for each Education object """
    name = Column(db.String)
    school = Column(db.Integer)


class Skillset(Model):
    """ Categories of skills """
    name = Column(db.String)


class Skill(Model):
    """ Individual skills within Skillset category """
    name = Column(db.String)
    skillset = Column(db.Integer)


class Project(Model):
    """ Images for the webapp """
    name = Column(db.String)
    description = Column(db.String)
    description_html = Column(db.String)
    project_id = Column(db.String)


class Appimages(Model):
    """ Images for the webapp """
    image = Column(db.BLOB)
    image_type = Column(db.String)
    image_name = Column(db.String)


class Service(object):

    @staticmethod
    def all(model):
        """Queries model and returns all rows."""
        return model.query.order_by('id').all()

    @staticmethod
    def first(model):
        """Queries model and returns only first row."""
        return model.query.first()

    @staticmethod
    def get(model, id):
        """Queries model and returns row the speficied id.

        :param id: the row id
        """
        return model.query.get(id)

    @staticmethod
    def select(model, **kwargs):
        """Queries model and filters results by specified key word arguments.

        :param **kwargs: filter parameters
        """
        return model.query.filter_by(**kwargs).order_by('id').all()

    @staticmethod
    def select_first(model, **kwargs):
        """Queries model and returns first result after filtering by
        specified key word arguments.

        :param **kwargs: filter parameters
        """
        return model.query.filter_by(**kwargs).first()

    @classmethod
    def get_info(cls):
        """Returns a single dict object with data from the Person, Address,
        and Website table
        """
        person = cls.first(Person).as_dict()
        person['address'] = cls.first(Address).as_dict()
        person['websites'] = [w.as_dict() for w in cls.all(Website)]
        return person

    @classmethod
    def get_experience(cls):
        """Returns a single dict object containing work Experience and
        list of Workitems for each
        """
        exp = cls.all(Experience)
        exp_list = []
        for e in exp:
            ed = e.as_dict()
            ed['items'] = [w.description for w in
                             cls.select(Workitem, company=e.id)]
            exp_list.append(ed)
        return exp_list

    @classmethod
    def get_skills(cls):
        """Returns a single dict object containing Skillsets and
        list of Skills for each
        """
        return [{'skillset': s.name,
                 'items': [k.name for k in cls.select(Skill, skillset=s.id)]}
                for s in cls.all(Skillset)]

    @classmethod
    def get_education(cls):
        """Returns a single dict object containing Education and
        list of courses for each
        """
        edu = cls.all(Education)
        edu_list = []
        for e in edu:
            ed = e.as_dict()
            ed['courses'] = [c.name for c in
                             cls.select(Coursework, school=e.id)]
            edu_list.append(ed)
        return edu_list

    @classmethod
    def get_full_cv(cls):
        """Returns a single dict object containing full CV information"""
        return {'info': cls.get_info(), 'experience': cls.get_experience(),
                'skills': cls.get_skills(), 'education': cls.get_education()}

    @classmethod
    def get_projects(cls):
        """Returns a single dict object containing projects
        """
        prj_list = []
        for pr in cls.all(Project):
            p = pr.as_dict()
            i =  cls.get_image_by_name(pr.project_id)
            p['image'] = i.image
            p['image_type'] = i.image_type
            prj_list.append(p)
        return prj_list

    @classmethod
    def get_image_by_name(cls, image_name):
        """Returns an image by image name """
        return cls.select_first(Appimages, image_name=image_name)