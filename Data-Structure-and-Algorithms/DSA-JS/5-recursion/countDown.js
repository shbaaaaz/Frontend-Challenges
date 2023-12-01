/*
Question:
    Write a countDown function to print numbers from a specified range till 1 and print “All done”

Sample Input:
    countDown(5)    5
                    4
                    3
                    2
                    1
                    All done
*/

const countDown = num => {
    if (num <= 0) {
        console.log("All done");
        return;
    }
    console.log(num);
    countDown(num - 1);
}
