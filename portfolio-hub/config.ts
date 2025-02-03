class Config{
    apiUrl?: string

    constructor(){
        this.apiUrl=process.env.NEXT_PUBLIC_API_URL;
    }
}


const config = new Config();
export default config;