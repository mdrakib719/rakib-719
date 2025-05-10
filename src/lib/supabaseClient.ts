import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://czrzkrlkqywcczazeopo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6cnprcmxrcXl3Y2N6YXplb3BvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0Mjk2MTksImV4cCI6MjA2MDAwNTYxOX0.WojC6BIUIjCuQQj-5zpzI8s_pUZNn5HvKPG4OlD4jXM";

export const supabase = createClient(supabaseUrl, supabaseKey);
