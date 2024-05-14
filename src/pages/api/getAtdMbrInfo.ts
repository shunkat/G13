import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";


//ATTEND_MEMBER_INFO(日程参加者の情報)の取得

export const POST: APIRoute = async ({ request }) => {
    const {schedule_id} = await request.json();
    const { data, error } = await supabase
      .from("attend_member_info")
      .select("*")
      .eq("schedule_id",schedule_id)
      
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