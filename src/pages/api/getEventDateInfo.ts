import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


//EVENT_DATE_INFO(日程情報)の取得

export const POST: APIRoute = async ({ request }) => {
    const body  = await request.json();
    const event_no = body.event_no;
    const { data, error } = await  supabase
      .from("event_date_info")
      .select("*")
      .eq("event_no", event_no)
      
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