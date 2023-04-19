interface Config {
  baseUrl: string;
}

const config: Config = {
  baseUrl: process.env.REACT_APP_BASE_URL || "",
};

export default config;
