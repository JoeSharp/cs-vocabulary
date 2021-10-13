const vocabCsv = `
Lesson 9 - Selection challenge,Comparison operators,"An operator that is used to compare one operand to another. For example, < >. "
Lesson 9 - Selection challenge,Selection,Controlling the flow of execution in programs using if statements.
Lesson 9 - Selection challenge,Expression,An expression is a collection of operands and operators that can be evaluated.
Lesson 9 - Selection challenge,Condition,Used to control the flow of execution in a program. A condition contains a logical expression.
Lesson 15 - Data validation,Iteration,"Repetition of code blocks. For example, a while loop."
Lesson 15 - Data validation,Data validation,A check performed on data input to ensure that it can be accepted by the program without causing an error.
Lesson 15 - Data validation,Robustness,A program is robust when it does not produce any errors during execution. 
Lesson 15 - Data validation,Try and except,A data validation check to see if the data entered can be accepted by the program. If a defined error occurs the user will be prompted with a warning. 
Lesson 10 - Logical expressions ,Boolean expression,An expression that evaluates as True or False. Also known as a logical expression. 
Lesson 10 - Logical expressions ,Logical expression,An expression that evaluates as True or False.
Lesson 10 - Logical expressions ,Boolean operator,"An operator used in a Boolean expression. For example AND, OR and NOT. Also known as logical operators. "
Lesson 10 - Logical expressions ,Logical operator,"An operator used in a logical expression. For example AND, OR and NOT. "
Lesson 10 - Logical expressions ,Expression,An expression is a collection of operands and operators that can be evaluated.
Lesson 10 - Logical expressions ,Operator,A symbol or function that performs an operation. For example +.
Lesson 12 - While loops,Iteration,"Repetition of code blocks. For example, a while loop."
Lesson 18 - Subroutines ,While loop,A loop that will continue to iterate whilst its condition evaluates as True. 
Lesson 18 - Subroutines ,Subroutine,A sequence of instructions to perform a specific task with an identifiable name.
Lesson 18 - Subroutines ,Function,A subroutine that returns a value.
Lesson 18 - Subroutines ,Procedure,A subroutine that executes a block of code when called. It does not return a value. 
Lesson 18 - Subroutines ,Parameter,Used in a subroutine to allow values to be passed into them. 
Lesson 18 - Subroutines ,Argument,The values held in the brackets of a subroutine call. These are passed into a subroutine via the parameters. 
Lesson 18 - Subroutines ,Decomposition,Breaking down a problem into smaller sub-problems to make the more manageable. 
Lesson 16 & 17 - Pseudocode ,Pseudocode,Informal steps for an algorithm using structured English.
Lesson 16 & 17 - Pseudocode ,Syntax,The formal method used to structure code in a given programming language.
Lesson 16 & 17 - Pseudocode ,Algorithm,A series of instructions that end when the problem is solved. 
Lesson 7 - Arithmetic expressions ,Arithmetic expression,An expression that results in a numeric value.
Lesson 7 - Arithmetic expressions ,BIDMAS,"Acronym used to show the order of operations in an arithmetic expression. Brackets, Indices, Division, Multiplication, Addition and Subtraction. Add and subtract are interchangeable and should be read from left to right. "
Lesson 7 - Arithmetic expressions ,MOD / Modulo,Calculates the remainder of a division. For example 7 MOD 3 will calculate as 1. 
Lesson 7 - Arithmetic expressions ,Integer division,In integer division there can be remainders because the resulting value will be a whole number. For example 7 ÷ 3 will calculate as 2.
Lesson 7 - Arithmetic expressions ,Real division,In real division there are no remainders because the resulting value can be a decimal number. For example 7 ÷ 3 will be calculated as 2.3333333333333335.
Lesson 7 - Arithmetic expressions ,Operator,A symbol or function that performs an operation. For example +.
Lesson 6 - Randomisation,True-random number,This type of random number is generated using unpredictable physical means such as atmospheric noise.
Lesson 6 - Randomisation,Pseudo-random number,This type of random number is generated using mathematical algorithms which are computer-generated and therefore highly predictable.
Lesson 6 - Randomisation,Module,"In Python, a module is a file containing Python definitions and statements. The functionality of these definitions and statements is then available to be made use of."
Lesson 6 - Randomisation,Import,The keyword that enables a module to be brought into our programs.
Lesson 6 - Randomisation,Library,"In Python, the library contains built-in modules that provide access to system functionality such as file i/o."
Lesson 13 - Trace tables ,While loop,A loop that will continue to iterate whilst its condition evaluates as True.
Lesson 13 - Trace tables ,Trace table,An error checking method that steps through each line of code in a program and records the state of the variables and conditions. 
Lesson 13 - Trace tables ,Selection,Controlling the flow of execution in programs using if statements.
Lesson 13 - Trace tables ,Variable,A value held under one name.
Lesson 13 - Trace tables ,Iteration,"Repetition of code blocks. For example, a while loop."
Lesson 14 - For loops ,For loop,An iterative statement that will repeat for the length of a given sequence. 
Lesson 14 - For loops ,While loop,A loop that will continue to iterate whilst its condition evaluates as True.
Lesson 14 - For loops ,Function ,A subroutine that returns a value. 
Lesson 14 - For loops ,Return value,A value that is returned by a function.
Lesson 14 - For loops ,Function call,A statement used to execute a function. 
Lesson 4 - Input,Input(),A function that prompts the user for input. 
Lesson 4 - Input,Boolean data type,A value that is either True or False. 
Lesson 4 - Input,Integer,A value that is a whole number.
Lesson 4 - Input,String,A value that is text. This can include numbers but they will be read as text.
Lesson 4 - Input,Character,A single character of string. 
Lesson 4 - Input,Real / Float,A decimal number. 
Lesson 4 - Input,Concatenate,Join strings together.
Lesson 8 - Selection,Condition,Used to control the flow of execution in a program. A condition contains a logical expression. 
Lesson 8 - Selection,Decision symbol,Used on a flowchart to represent a condition.
Lesson 8 - Selection,Selection,Controlling the flow of execution in programs using if statements.
Lesson 8 - Selection,Control flow,The order in which instructions are executed in a program. 
Lesson 8 - Selection,Execution,Carrying out the instructions for a computer program.
Lesson 8 - Selection,Logical expression,An expression that results in either True or False. 
Lesson 34 - Variables,Declaration,Declaring a variable as a specific data type.
Lesson 34 - Variables,Assignment,Assigning a value to a variable.
Lesson 34 - Variables,Initialisation,Assigning an initial value to a variable to let the compiler know that a memory location is required.
Lesson 34 - Variables,Variable,A value held under one name.
Lesson 34 - Variables,Naming convention,A unified standard for naming things in a chosen programming language. 
Lesson 26 - String Handling 1,Concatenate,When two or more strings are joined together. 
Lesson 26 - String Handling 1,String,A value that is text. This can include numbers but they will be read as text.
Lesson 26 - String Handling 1,String handling,Performing operations on string. 
Lesson 26 - String Handling 1,Element,A character in a string or an item in a sequence. 
Lesson 11 - Nested Selection,Selection,Controlling the flow of execution in programs using if statements.
Lesson 11 - Nested Selection,Nested selection,A selection block placed within another selection block. 
Lesson 40 - Reading CSV Files,CSV,Acronym for comma-separated values. It is a plaintext data file where each value is separated by a single comma.
Lesson 40 - Reading CSV Files,Method,A function that belongs to an object.
Lesson 40 - Reading CSV Files,Spreadsheet,A document where data can be arranged in rows and columns. A spreadsheet can be used to sort and perform calculations on data. 
Lesson 40 - Reading CSV Files,Tabular format,Displaying data in a grid of rows and columns. 
Lesson 21 - XOR,XOR,A Boolean / logical operator.
Lesson 21 - XOR,Operator,A symbol or function that performs an operation. For example +.
Lesson 21 - XOR,Function,A subroutine that returns a value.
Lesson 21 - XOR,Parameter,Used in a subroutine to allow values to be passed into them.
Lesson 21 - XOR,Return value,A value that is returned by a function.
Lesson 21 - XOR,Boolean expression,An expression that evaluates as True or False. Also known as a logical expression.
Lesson 21 - XOR,Logical expression,An expression that evaluates as either True or False.
Lesson 21 - XOR,Truth table,A table that lists the outputs of all possible input combinations. 
Lesson 41 - Writing to a CSV file,CSV,Acronym for comma-separated values. It is a plaintext data file where each value is separated by a single comma.
Lesson 41 - Writing to a CSV file,Split method,The split method takes a string and splits it when it finds a defined character. The result will be held as a list. 
Lesson 41 - Writing to a CSV file,Join method,The join method takes a list and joins each value in that list into one string. 
Lesson 23 & 24 - Create a Program,Iterative testing,Testing a program during its creation. 
Lesson 23 & 24 - Create a Program,Final testing,Testing a program at the end of its creation. 
Lesson 23 & 24 - Create a Program,Erroneous data,Data that should not be accepted by the program or it will cause an error. 
Lesson 23 & 24 - Create a Program,Boundary data,Data that should be accepted by a program. It tests the data right at the boundary of a range. 
Lesson 23 & 24 - Create a Program,Normal data,Data that should be accepted by a program. This is data that you would expect a user to enter. 
Lesson 19 - Functions,Subroutine,A sequence of instructions to perform a specific task with an identifiable name.
Lesson 19 - Functions,Function,A subroutine that returns a value.
Lesson 19 - Functions,Procedure,A subroutine that executes a block of code when called. It does not return a value.
Lesson 19 - Functions,Return value,A value that is returned by a function.
Lesson 19 - Functions,Parameter,Used in a subroutine to allow values to be passed into them.
Lesson 19 - Functions,Argument,The values held in the brackets of a subroutine call. These are passed into a subroutine via the parameters.
Lesson 19 - Functions,Decomposition,Breaking down a problem into smaller sub-problems to make the more manageable.
Lesson 22 - Structured Programming,Interface,"A term used with subroutines to describe how it will interact with the program. It refers to the subroutine identifier, parameters, order of parameters and the return values.  "
Lesson 22 - Structured Programming,Structured programming,"A programming paradigm where sequence, selection, iteration and subroutines are used to control the flow of execution. Each block of code in a structured program has a single entry point and a single exit point."
Lesson 22 - Structured Programming,Parameter,Used in a subroutine to allow values to be passed into them.
Lesson 22 - Structured Programming,Return value,A value that is returned by a function.
Lesson 22 - Structured Programming,Function,A subroutine that returns a value.
Lesson 22 - Structured Programming,Procedure,A subroutine that executes a block of code when called. It does not return a value.
Lesson 22 - Structured Programming,Subroutine,A sequence of instructions to perform a specific task with an identifiable name.
Lesson 33 - 2D Array and Lists,2D array,A static data structure that holds data both horizontally and vertically. The structure is fixed and each element has the same data type. 
Lesson 33 - 2D Array and Lists,2D list,A dynamic data structure that holds data both horizontally and vertically. The structure can change during program execution and the data types of the elements can be different. 
Lesson 38 - Reading Text Files,Data file,A file that can be accessed and modified by a program. 
Lesson 38 - Reading Text Files,Text file,A file stored on a computer that contains plain text. 
Lesson 42 - Being a Programmer,Meaningful identifiers,Naming a variable or data structure using a sensible name that can be easily recognised and remembered. 
Lesson 42 - Being a Programmer,Naming conventions,Following the guidance in the programming language documentation about naming structures.
Lesson 42 - Being a Programmer,Append,Adding to an existing data structure.
Lesson 1 - Translators,Assembly language,A language that replaces machine code with mnemonics and operands to make them easier to read/write. 
Lesson 1 - Translators,Assembler,An assembler translates assembly language into machine code.
Lesson 1 - Translators,Compiler,A compiler creates an executable file for a program by translating a high-level language to machine-readable code. 
Lesson 1 - Translators,Execute,To carry out the instructions for a computer program.
Lesson 1 - Translators,High-level language,"A human-readable language written in formal, structured English."
Lesson 1 - Translators,Interpreter,An interpreter translates and executes code line by line. It translates the code into machine-readable code. 
Lesson 1 - Translators,Low-level language,"Quickly executed by a computer, written in either machine code or assembly. "
Lesson 1 - Translators,Machine code,A program written using 1s and 0s. A computer can execute this directly. 
Lesson 1 - Translators,Mnemonic,A code to help us remember something. 
Lesson 1 - Translators,Operand,A piece of data that can be changed.
Lesson 1 - Translators,Translator,Executes the programs that programmers write in high-level languages.
Lesson 5 - Flowcharts,Flowchart,A visual representation of an algorithm or program. 
Lesson 5 - Flowcharts,Subroutine,A sequence of instructions to perform a specific task with an identifiable name.
Lesson 5 - Flowcharts,Terminator,Oval shapes used to show the start and end of a flowchart. 
Lesson 37 - Dictionary Challenge,Caesar cipher,Named after Julius Caesar. A caesar cipher is one of the oldest and simplest forms of encryption that involves shifting letters of the alphabet by a defined amount to create an encrypted message. 
Lesson 37 - Dictionary Challenge,Dictionary,A data structure that involves creating data pairings that can be located using a key.
Lesson 37 - Dictionary Challenge,Key,"In a dictionary data structure, a key is used to identify each attribute held in the dictionary."
Lesson 37 - Dictionary Challenge,Key-value pair,"In a dictionary, a key-value pair is when a key (the attribute identifier) is paired with the data. "
Lesson 39 - Text File,Text file,A file stored on a computer that contains plain text.
Lesson 28 - String Handling 3,ASCII,Acronym for American Standard Code for Information Interchange. It is used to represent characters with a numerical value. 
Lesson 28 - String Handling 3,String handling,Performing operations on string.
Lesson 28 - String Handling 3,Substring,Part of a string.
Lesson 28 - String Handling 3,Concatenate,When two or more strings are joined together.
Lesson 44 - Battle Boats Design,Pseudocode,Informal steps for an algorithm using structured English.
Lesson 44 - Battle Boats Design,Flowchart,A visual representation of an algorithm or program.
Lesson 31 - Sense Hat 1,Array,A fixed (static) data structure that holds items of the same data type under one name.
Lesson 31 - Sense Hat 1,List,A dynamic data structure that holds items under one name. The items can be of varying data types.
Lesson 31 - Sense Hat 1,Sense HAT,Hardware that attaches to the top of a Raspberry Pi computer and allows you to write programs that collect data from sensors. The Sense HAT also has an LED matrix for displaying output. 
Lesson 31 - Sense Hat 1,Pixel,A single element of an image on a computer screen. 
Lesson 31 - Sense Hat 1,Sensor,A tool that collects data. 
Lesson 31 - Sense Hat 1,Sense HAT emulator,A digital representation of the physical Sense HAT device. 
Lesson 31 - Sense Hat 1,LED matrix,A group of LEDs placed in a grid structure. 
Lesson 25 - GUIs,GUI,"Acronym for Graphical User Interface. It is an event driven program that allows the user to interact with it in a variety of ways. For example, buttons and icons. "
Lesson 25 - GUIs,guizero,A third party library that can be imported into Python to create a GUI. 
Lesson 25 - GUIs,Third party libraries,Code that has not been written by the Python developer or you that can be imported into your programs to save you from writing them yourself if you don’t have the time or necessary skills. 
Lesson 20 - Scope,Scope,The scope of a variable is the section of the program where the variable can be accessed and modified.
Lesson 20 - Scope,Parameter,Used in a subroutine to allow values to be passed into them.
Lesson 20 - Scope,Global variable,A global variable can be accessed and modified from anywhere in the program. 
Lesson 20 - Scope,Variable,A value held under one name.
Lesson 20 - Scope,Constant,A constant is a value that cannot be changed during the execution of a program. 
Lesson 20 - Scope,Function,A subroutine that returns a value.
Lesson 43 - Battle Boats,Success criteria,A list of key elements required in a programming solution based on the scenario or user requirements. 
Lesson 36 - Records and Dictionaries,Entity,"An entity is a single object, place, person or thing. E.g. player"
Lesson 36 - Records and Dictionaries,Attribute,"Properties or characteristics of an entity, e.g. player name, player score"
Lesson 36 - Records and Dictionaries,Field,Also known as an attribute. It is the properties or characteristics of an entity. 
Lesson 36 - Records and Dictionaries,Record,A collection of attributes for a single entity. 
Lesson 36 - Records and Dictionaries,Database,A structured and organised method for storing data. A database holds multiple records.
Lesson 36 - Records and Dictionaries,Key,"In a dictionary data structure, a key is used to identify each attribute held in the dictionary. "
Lesson 36 - Records and Dictionaries,Dictionary,A data structure that involves creating data pairings that can be located using a key. 
Lesson 27 - String Handling 2,String handling,Performing operations on string.
Lesson 27 - String Handling 2,Concatenate,When two or more strings are joined together.
Lesson 27 - String Handling 2,Substring,Part of a string. 
Lesson 2 - Sequence,Error messages,Used to find errors in your program. They pinpoint lines of code that contain errors and provide details about them. 
Lesson 2 - Sequence,Execute,To carry out the instructions for a computer program.
Lesson 2 - Sequence,IDE,Integrated development environment. This is a place to write programs that provides support with debugging and diagnostics.
Lesson 2 - Sequence,Interpreter,An interpreter translates and executes code line by line. It translates the code into machine readable code.
Lesson 2 - Sequence,Logic error,"The program will run, but won’t do what the programmer expected. These are tricky to spot as they are not picked up by the IDE."
Lesson 2 - Sequence,Sequence,"The sequence of a program is performed from top to bottom, executing each line in turn. "
Lesson 2 - Sequence,Subroutine,A sequence of instructions to perform a specific task with an identifiable name. 
Lesson 2 - Sequence,Syntax,"In programming, the language specific code that you write in has its own syntax. The syntax is unique to that programming language."
Lesson 2 - Sequence,Syntax error,An error where the code has been structured incorrectly and the syntax rules haven’t been followed. 
Lesson 2 - Sequence,Translator,To execute the programs that programmers write in high-level languages.
Lesson 30 - List Methods,Traverse,Move through a sequence.
Lesson 30 - List Methods,Method,A function that belongs to an object. 
Lesson 30 - List Methods,Custom built function,A function that you have created yourself and imported into other programs that you have created. 
Lesson 30 - List Methods,List,A dynamic data structure that holds items under one name. The items can be of varying data types.
Lesson 34 - 2D List Challenge,2D list,A dynamic data structure that holds data both horizontally and vertically. The structure can change during program execution and the data types of the elements can be different.
Lesson 34 - 2D List Challenge,Iterative testing,Testing a program during its creation.
Lesson 34 - 2D List Challenge,Final testing,Testing a program at the end of its creation.
Lesson 34 - 2D List Challenge,Decomposition,Breaking down a problem into smaller sub-problems to make the more manageable.
Lesson 34 - 2D List Challenge,Interface,"A term used with subroutines to describe how it will interact with the program. It refers to the subroutine identifier, parameters, order of parameters and the return values."
Lesson 34 - 2D List Challenge,Structure chart,A top-down diagram used to design the structure of the subroutines required for completing a program. 
`
export default vocabCsv;