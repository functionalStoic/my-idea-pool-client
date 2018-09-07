import axiosInstance from './utils/axiosInstance';

export class IdeasApi {
  static async createIdea(content, impact, ease, confidence) {
    try {
      const { data } = await axiosInstance.post('/ideas', {
        content,
        impact,
        ease,
        confidence
      });

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteIdea(id) {
    try {
      return axiosInstance.delete(`/ideas/${id}`);
    } catch (error) {
      throw error;
    }
  }

  static async getIdeas(page) {
    try {
      const { data } = await axiosInstance.get(`/ideas`, { page });

      return data;
    } catch (error) {
      throw error;
    }
  }

  static async updateIdea(id, content, impact, ease, confidence) {
    try {
      const { data } = await axiosInstance.put(`/ideas/${id}`);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
