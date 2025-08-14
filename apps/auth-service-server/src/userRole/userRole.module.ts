import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserRoleModuleBase } from "./base/userRole.module.base";
import { UserRoleService } from "./userRole.service";
import { UserRoleController } from "./userRole.controller";

@Module({
  imports: [UserRoleModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserRoleController],
  providers: [UserRoleService],
  exports: [UserRoleService],
})
export class UserRoleModule {}
