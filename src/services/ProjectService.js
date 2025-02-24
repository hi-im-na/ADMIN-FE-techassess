import request from "@/utils/request";

const ProjectService = {
  fetchProjects: async () => {
    try {
      const response = await request.get("/api/projects");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  fetchProjectById: async (id) => {
    try {
      const response = await request.get(`/api/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
export default ProjectService;
