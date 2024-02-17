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
  notes?: string | null;
  name_hash?: string | null;
  role?: Roles;
  order_identifier?: string | null;
  order_store_id?: string | null;
  order_number?: string | null;
  order_status?: string | null;
  billing_start_date?: string | null;
  plan_status?: string;
  trial_start_date?: Date | string;
  usage?: number;
  basic_usage_limit_email?: boolean;
  new_signup_email?: boolean;
  premium_plan_expired_email?: boolean;
  premium_usage_limit_email?: boolean;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Feedbacks = {
  id?: number;
  message: string;
  user_id: string;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Notifiers = {
  id?: number;
  name: string;
  notes?: string | null;
  name_hash?: string | null;
  profile_id: string;
  category_id?: number | null;
  notify_date: Date | string;
  enabled?: boolean;
  completed?: boolean;
  repeat?: boolean | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Profiles = {
  id?: string;
  user_id: string;
  name: string;
  notes?: string | null;
  name_hash?: string | null;
  currency?: string;
  locale?: string;
  monthly_email_report?: boolean;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Incomes = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  name_hash?: string | null;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Expenses = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  name_hash?: string | null;
  paid_via?: string;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Debts = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  name_hash?: string | null;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Lends = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  name_hash?: string | null;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Investments = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  units?: string;
  name_hash?: string | null;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Subscriptions = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  paid: string;
  url?: string | null;
  name_hash?: string | null;
  notify?: boolean;
  start_date: Date | string;
  end_date: Date | string;
  active?: boolean | null;
  cancelled_at?: string | null;
  category_id?: number | null;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Reports = {
  id?: string;
  profile_id: string;
  name: string;
  notes?: string | null;
  amount?: string;
  name_hash?: string | null;
  category_id?: number | null;
  start_date: Date | string;
  end_date: Date | string;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type Categories = {
  id?: number;
  profile_id: string;
  name: string;
  notes?: string | null;
  name_hash?: string | null;
  type: CategoryTypes;
  created_at?: Date | string;
  updated_at?: Date | string;
};
