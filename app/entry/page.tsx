// app/entry/page.tsx などの (EntryFormPage)
import { redirect } from "next/navigation";

export default function EntryFormPage() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSelCXJowz0XaIQNazhXaI410Y484kImbFwACIqLdjnaxfVZvw/viewform"
  );
}
