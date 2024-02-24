import { InjectModel } from '@nestjs/mongoose';
import { UserRepositoryInterface } from 'src/domain/data/protocols/db/user/user-repository.interface';
import { User } from 'src/domain/user/user';
import { UserModel } from '../../models/user/user.model';
import { Model } from 'mongoose';

export class MongodbUserRepository implements UserRepositoryInterface {
  constructor(
    @InjectModel(UserModel.name)
    private readonly userCollection: Model<UserModel>,
  ) {}

  async create(data: User): Promise<UserModel> {
    const user = new this.userCollection(data);
    return user.save();
  }
  async find(): Promise<UserModel[]> {
    return await this.userCollection.find({}, { _v: false });
  }
  // findOne({__id: { $eq: id}}) evita sql injection
  async findById(id: string): Promise<UserModel> {
    return await this.userCollection.findOne({ _id: { $eq: id } });
  }
  async update(id: string, dataUpdate: User): Promise<UserModel> {
    return await this.userCollection.findOneAndUpdate({
      __id: { $eq: id },
      $set: dataUpdate,
      new: true,
    });
  }
  async remove(id: string): Promise<void> {
    await this.userCollection.deleteOne({ _id: { $eq: id } });
  }
}
