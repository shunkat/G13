import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {

    const { member_name ,event_no, comment }  = await request.json();      
    const { data, error } = await supabase
    .from('event_member')
    .insert({
        member_name: member_name ,
        event_no: event_no ,
        comment: comment 
        });

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