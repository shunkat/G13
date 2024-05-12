import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const GET: APIRoute = async () => {
    const { data, error } = await supabase
      .from("event_date_info")
      .select("*");
  
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
    const { event_no, event_dates } = await request.json();
    const errors = [];
    const insertedData = [];

    for (let i = 0; i < event_dates.length; i++) {
        const date = event_dates[i];
        const { data, error } = await supabase
            .from("event_date_info")
            .insert({
                event_no: event_no,
                schedule_id: i,
                schedule_name: date
            });

        if (error) {
            errors.push({ index: i, error: error.message });
        }
    }

    if (errors.length > 0) {
        return new Response(
            JSON.stringify({
                message: "Some inserts failed",
                errors: errors
            }),
            { status: 500 }
        );
    }

    return new Response(JSON.stringify(insertedData));
};
