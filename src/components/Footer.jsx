import Link from "next/link";

export function Footer(){
    return(
        <div className="flex justify-center p-3">
            
            <div className="footer">
                <Link href="/add-programme">Add Programme</Link>
                &nbsp;|&nbsp;
                <Link href="/add-category">Add Category</Link>
            </div>
                  
        </div>
    )
}