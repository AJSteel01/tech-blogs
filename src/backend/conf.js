import config from '../config/config';
import { Client, ID , Databases, Storage, Query, Account} from "appwrite";

export class Service{

    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appwriteUrl)
                   .setProject(config.appwriteProjectId)
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title, slug,content,featuredImage,status,userId}){
        try {
          return await this.databases.createDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status,
                userId,
            }
          )
        } catch (error) {
            console.log("Appwrite service :: Create Post :: error",error);
        }
    }

    async updatePost(slug, {title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: Update Post :: error",error);
        }
    }

    async deletePost(slug){
        try {
           await this.databases.deleteDocument(
            config.appwriteDatabaseId,
            config.appwriteCollectionId,
            slug
           ) 
           return true
        } catch (error) {
            console.log('appwrite service ::  DeletePost::error ',error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error",error);
            return false;
        }
    }

    async getPosts(queries =[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPosts:: error",error)
        }
    }

    //file upload service
}


const service = new Service();

export default service;
