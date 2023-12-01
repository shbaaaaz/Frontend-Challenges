/*
Question:
    Write a recursive function called reverse which accepts a string and returns a new string in reverse.

Sample Inputs:
    reverse('awesome') // 'emosewa'
    reverse('rithmschool') // 'loohcsmhtir'
*/

// Approach 1: Using Substring
const reverse = str => {
    if (str.length <= 1) return str;
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// Approach 2: Using Slice
function reverse_2(str){
	if(str.length <= 1) return str;
	return reverse_2(str.slice(1)) + str[0];
}
