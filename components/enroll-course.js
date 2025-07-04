import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const EnrollCourse = ({asLink}) => {
  return (
    <>
    <form>
        {asLink ? (
            <Button
             type="submit"
            variant="ghost"
            className="text-xs text-tertiary h-7 gap-1 hover:scale-105 duration-300 ease-in-out"
          >
            Enroll
            <ArrowRight className="w-3" />
          </Button>
        ) : (
            <Button
             type="submit" className={cn(buttonVariants({ size: "lg" }))}>
                Enroll Now
              </Button>
        )}
    </form>
    </>
  )
}

export default EnrollCourse