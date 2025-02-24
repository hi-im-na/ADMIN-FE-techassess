import request from "@/utils/request";

const UserService = {
  addUser: async (dto) => {
    try {
      const response = await request.post("/api/auths/register", dto);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  deletedUser: async (id) => {
    try {
      const response = await request.delete(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  fetchUsers: async () => {
    try {
      const response = await request.get("/api/users");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  fetchUserById: async (id) => {
    try {
      const response = await request.get(`/api/users/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  updateUser: async (reqDto, id) => {
    try {
      const response = await request.put(`/api/users/${id}`, reqDto);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default UserService;
