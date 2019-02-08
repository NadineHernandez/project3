import axios from "axios";

export default {

  registerUser: function(user) {
    return axios.post("/api/users/register", user);
  },

  loginUser: function(user) {
    return axios.post("/api/users/login", user);
  },

  authenticateUser: function() {
    return axios.post("api/users/authenticate", { withCredentials: true });
  },

  // Get all Live Projects (approved, in progress)
  getProjects: function() {
    return axios.get("/api/projects");
  },

  //Get a single Project by ID
  getThisProject: function(projectID) {
    return axios.get("/api/projects/" + projectID);
  },

  //Creates a new project
  createProject: function(approvedIdea) {
    return axios.post("/api/projects", approvedIdea);
  },

  //Updates an existing project
  updateProject: function(project) {
    return axios.put("/api/projects/" + project.id, project);
  },

  //Get all Ideas (conditional to exclude approved ideas, see: api route and controller)
  getIdeas: function() {
    return axios.get("/api/ideas");
  },

  //Get all Approved ideas
  getApproved: function() {
    return axios.get("/api/ideas/approved");
  },

  //post submitted Idea to db
  submitIdea: function(newIdea) {
    return axios.post("/api/ideas", newIdea);
  },

  //update part of an existing Idea
  updateIdea: function(idea) {
    return axios.put("/api/ideas/" + idea.id, idea);
  },

  deleteIdea: function(idea) {
    return axios.delete("/api/ideas/" + idea.id);
  },

  getRoles: function(projectId) {
    return axios.get(`api/projectroles/project/${projectId}`)
  },

  updateRole: function(role) {
    return axios.put(`api/projectroles/${role.id}`, role)
  },

  deleteRole: function(roleId) {
    return axios.delete(`api/projectroles/${roleId}`)
  },

  getRoleMembers: function(projectId) {
    return axios.get(`api/rolemembers/${projectId}`)
  },

  postRoleMember: function (roleMember) {
    return axios.post("api/rolemembers/", roleMember)
  },

  deleteRoleMembers: function(roleMemberId) {
    return axios.get(`api/rolemembers/${roleMemberId}`)
  }
};
