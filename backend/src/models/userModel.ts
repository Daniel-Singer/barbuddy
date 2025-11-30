import { InferSchemaType, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { TUser, UserRoleEnum } from '../schema/userSchema';

interface UserMethods {
  comparePasswords(providedPassword: string): Promise<boolean>;
}

interface UserModel extends Model<TUser, {}, UserMethods> {}

type TUserSchema = Omit<TUser, 'orgId'> & {
  orgId: Schema.Types.ObjectId;
  role: UserRoleEnum[];
};

const userSchema = new Schema<TUserSchema, UserModel, UserMethods>(
  {
    orgId: {
      type: Schema.Types.ObjectId,
      required: true,
      select: false,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: [String],
      enum: Object.values(UserRoleEnum),
      default: [UserRoleEnum.ADMIN],
    },
  },
  {
    timestamps: true,
  },
);

userSchema.method('comparePasswords', async function (providedPassword) {
  return await bcrypt.compare(providedPassword, this?.password!);
});

export const User = model('User', userSchema);

export type UserDocument = InferSchemaType<typeof userSchema>;
