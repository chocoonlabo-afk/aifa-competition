// app/contact/page.tsx
import { redirect } from "next/navigation";

export default function ContactPage() {
  redirect(
    "https://docs.google.com/forms/d/e/1FAIpQLSdeWR8Zs7KYDToiL8tCMcXTPZ-f-VvxULfb9Jg1YGG-ScVzbA/viewform"
  );
}
