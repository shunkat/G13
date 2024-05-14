import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


//EVENT_DATE_INFO(日程情報)の取得

export const GET: APIRoute = async ({ request }) => {
    const { even_no} = await request.json();
    const { data, error } = await supabase
      .from("event_date_info")
      .select("*")
      .eq("even_no",even_no)
      
    if (error) {
      return new Response(
        JSON.stringify({
          error: error.message,
        }),
        { status: 500 },
      );
    }
    
    return new Response(JSON.stringify(data));
  };