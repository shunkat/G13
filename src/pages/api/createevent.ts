import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async () => {
    const { data, error } = await supabase
      .from("event_info")
      .select("*")
  
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
  
  export const POST: APIRoute = async ({ request }) => {
    const { event_name, event_memo } = await request.json();
    const { data, error } = await supabase
      .from("event_info")
      .insert({ event_name, event_memo })
      .select();
  
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
  