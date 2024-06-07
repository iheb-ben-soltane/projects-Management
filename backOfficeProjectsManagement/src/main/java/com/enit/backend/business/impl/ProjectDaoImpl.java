package com.enit.backend.business.impl;


import java.util.Date;
import java.util.List;

import javax.ejb.Stateless;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query ;

import com.enit.backend.business.ProjectDao;
import com.enit.backend.entity.Project;



@Stateless
public class ProjectDaoImpl implements ProjectDao {
	@PersistenceContext(unitName = "projectsUnit")
	EntityManager em;
	@Override
	public List<Project> getAllproject(){
		String requeteJPQL= "select p from Project p "; 
		Query query= em.createQuery(requeteJPQL);
		
				List<Project>  Projects=  (List<Project>)query.getResultList();

		return Projects;
	}
	@Override
	public void addProject(Project project) {
		
		em.persist(project);
		
	}
	@Override
	public void findByCodeAndDelete(int code)throws Exception {
		try {
			Project project= em.find(Project.class, code);
			if(project!=null) {
				em.remove(project);
			}
			else {
				 throw new Exception("project not found");
			}
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	@Override
	public void updateProject(int code, Date newStartDate, String newDescription)throws Exception {
	    try {
	    	Project projectToUpdate = em.find(Project.class, code);
		    
		    if (projectToUpdate != null) {
		       
		        if (newStartDate != null && newDescription != null ) {
		            projectToUpdate.setStartDate(newStartDate);
		            projectToUpdate.setDescription(newDescription);
		            em.merge(projectToUpdate);
		        }
		        else {
		        	 throw new Exception("newStartDate and newDescription are required");
		        }
		    } else {
		    	 throw new Exception("project not found");
		    }
	    }catch(Exception e) {
	    	e.printStackTrace();
	    }
		
	}

}

