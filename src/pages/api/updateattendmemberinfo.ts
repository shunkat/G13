import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {

    const jsonData   = await request.json();
    const updateDatas = await jsonData;
    const { data, error } = await supabase
    .from('attend_member_info')
    .upsert(   
        updateDatas
    )
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

