// AUTO GENERATED FILE BY @kalissaac/prisma-typegen
// DO NOT EDIT

export enum Roles {
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export enum CategoryTypes {
  INCOMES = 'INCOMES',
  EXPENSES = 'EXPENSES',
  INVESTMENTS = 'INVESTMENTS',
  SUBSCRIPTIONS = 'SUBSCRIPTIONS',
  DEBTS = 'DEBTS',
  LENDS = 'LENDS',
  NOTIFIERS = 'NOTIFIERS',
  REPORTS = 'REPORTS'
}

export type Users = {
  id: string;
  email: string;
  name: string;
  notes?: string;
  name_hash?: string;
  role: Roles;
  order_identifier?: string;
  order_store_id?: string;
  order_number?: string;
  order_status?: string;
  billing_start_date?: string;
  plan_status: string;
  trial_start_date: Date;
  usage: number;
  basic_usage_limit_email: boolean;
  new_signup_email: boolean;
  premium_plan_expired_email: boolean;
  premium_usage_limit_email: boolean;
  feedbacks: Feedbacks[];
  profiles: Profiles[];
  created_at: Date;
  updated_at: Date;
};

export type Feedbacks = {
  id: number;
  message: string;
  user_id: string;
  user: users;
  created_at: Date;
  updated_at: Date;
};

export type Notifiers = {
  id: number;
  name: string;
  notes?: string;
  name_hash?: string;
  profile_id: string;
  profiles: profiles;
  category_id?: number;
  category?: categories;
  notify_date: Date;
  enabled: boolean;
  completed: boolean;
  repeat?: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Profiles = {
  id: string;
  user_id: string;
  user: users;
  name: string;
  notes?: string;
  name_hash?: string;
  currency: string;
  locale: string;
  monthly_email_report: boolean;
  incomes: Incomes[];
  expenses: Expenses[];
  debts: Debts[];
  lends: Lends[];
  investements: Investments[];
  subscriptions: Subscriptions[];
  categories: Categories[];
  reports: Reports[];
  notifers: Notifiers[];
  created_at: Date;
  updated_at: Date;
};

export type Incomes = {
  id: string;
  profile_id: string;
  profiles: Profiles;
  name: string;
  notes?: string;
  amount: string;
  name_hash?: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Expenses = {
  id: string;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  amount: string;
  name_hash?: string;
  paid_via: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Debts = {
  id: string;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  amount: string;
  name_hash?: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Lends = {
  id: string;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  amount: string;
  name_hash?: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Investments = {
  id: string;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  amount: string;
  units: string;
  name_hash?: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Subscriptions = {
  id: string;
  profile_id: string;
  profile: profiles;
  name: string;
  notes?: string;
  amount: string;
  paid: string;
  url?: string;
  name_hash?: string;
  notify: boolean;
  start_date: Date;
  end_date: Date;
  active?: boolean;
  cancelled_at?: string;
  category_id?: number;
  category?: Categories;
  created_at: Date;
  updated_at: Date;
};

export type Reports = {
  id: string;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  amount: string;
  name_hash?: string;
  category_id?: number;
  category?: Categories;
  start_date: Date;
  end_date: Date;
  created_at: Date;
  updated_at: Date;
};

export type Categories = {
  id: number;
  profile_id: string;
  profile: Profiles;
  name: string;
  notes?: string;
  name_hash?: string;
  type: CategoryTypes;
  incomes: Incomes[];
  expenses: Expenses[];
  subscriptions: Subscriptions[];
  investments: Investments[];
  lends: Lends[];
  debts: Debts[];
  reports: Reports[];
  notifiers: Notifiers[];
  created_at: Date;
  updated_at: Date;
};
