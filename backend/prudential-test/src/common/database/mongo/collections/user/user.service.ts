import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { User } from "./user.interface";

@Injectable()
export class UserService {
    @Inject("USER_MODEL")
    private userModel: Model<User>;

    async getAllUser(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    /**
     * 根据 id 后缀查询一批用户, 模拟随机推荐
     * @param suffix 后缀
     * @param limit 查询数量
     * @returns User[]
     */
    async getUserByIdSuffix(suffix: string, limit: number): Promise<User[]> {
        const regString = new RegExp(`${suffix}$`);
        return await this.userModel.find({ id: regString }).limit(limit).exec();
    }

    /**
     * 根据用户 id 查找指定用户
     * @param id 用户 id
     * @returns User
     */
    async getUSerById(id: string): Promise<User> {
        return await this.userModel.findOne({ id: id }).exec();
    }

}