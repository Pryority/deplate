type FeParams = {
  framework: number;
  typescript: boolean;
};

type BeParams = {
  ponder: boolean;
  database: number;
};

type FeModel = {
  frontend_id: number;
  framework: number;
  typescript: number;
};

type BeModel = {
  backend_id: number;
  ponder: number;
  database: number;
};

type TemplParams = {
  frontend_id: number;
  backend_id: number;
};

type TemplModel = {
  template_id: number;
  frontend_id: number;
  backend_id: number;
};

export type { FeParams, BeParams, FeModel, BeModel, TemplParams, TemplModel };
