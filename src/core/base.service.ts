import mongoose from 'mongoose'

class BaseService<T extends mongoose.Model<mongoose.Document>> {
  constructor(private model: T) {}

  create(data: T) {
    return this.model.create(data)
  }

  getAll() {
    return this.model.find()
  }

  getById(id: string) {
    return this.model.findById(id)
  }
}

export default BaseService
