import bookResolver from "./books.resolver";
import { mergeResolvers } from "@graphql-tools/merge";
import userResolver from "./user.resolver";
export default mergeResolvers([bookResolver, userResolver]);
