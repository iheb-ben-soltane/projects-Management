package com.enit.backend.business;

import java.util.Date;
import java.util.List;

import javax.ejb.Local;

import com.enit.backend.entity.Project;


@Local
public interface ProjectDao {
	List<Project> getAllproject();
	void addProject(Project project);
	void findByCodeAndDelete(int code)throws Exception;
	void updateProject(int code, Date newStartDate, String newDescription)throws Exception;
}

