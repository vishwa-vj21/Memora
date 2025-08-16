import * as React from "react";
import { cn } from "@/lib/utils";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";

// ✅ Accept both textarea + react-textarea-autosize props
export interface TextareaProps extends TextareaAutosizeProps {
  className?: string;
}

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <TextareaAutosize
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };

// import * as React from 'react'
// import TextareaAutosize, {
//   TextareaAutosizeProps,
// } from 'react-textarea-autosize'

// import { cn } from '@/lib/utils'

// export interface TextareaProps
//   extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

// const Textarea = React.forwardRef<
//   HTMLTextAreaElement,
//   TextareaAutosizeProps
// >(({ className, ...props }, ref) => {
//   return (
//     <TextareaAutosize
//       className={cn(
//         'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
//         className
//       )}
//       ref={ref}
//       {...props}
//     />
//   )
// })
// Textarea.displayName = 'Textarea'

// export { Textarea }
