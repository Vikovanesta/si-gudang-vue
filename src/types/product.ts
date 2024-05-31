export interface Product {
    id: number;
    merchant_id: number;
    user_id: number | null;
    product_sub_category_id: number;
    product_status_id: number;
    city_id: number;
    name: string;
    description: string;
    duration: number;
    start_date: string | null;
    end_date: string | null;
    price: number;
    unit: string;
    discount: number;
    thumbnail: string | null;
    address: string;
    coordinate: string;
    max_person: number | null;
    min_person: number | null;
    note: string | null;
    is_published: boolean;
    created_at: string | null;
    updated_at: string | null;
  }
  