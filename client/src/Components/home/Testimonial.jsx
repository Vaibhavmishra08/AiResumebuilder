import { BookUserIcon } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
  return (
    <div id ="testimonial" className="flex flex-col items-center my-10">
        <div className="flex items-center gap-2 text-sm text-blue-800 bg-green-400/10 border border-indigo-200 rounded-full px-6 py-1.5">
<BookUserIcon className="size-4.5 stroke-green-600" />
<span>Testimonials </span>
</div>

        <Title title="Don't just take our words " description="Read what our satisfied customers have to say about their experience with our service." />
    </div>
  )
}

export default Testimonial