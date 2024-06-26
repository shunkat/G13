import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


//ATTEND_MEMBER_INFO(日程参加者の情報)の取得

export const POST: APIRoute = async ({ request }) => {
    const { event_no } = await request.json();
    const { data, error } = await supabase
      .from("attend_member_info")
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
