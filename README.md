# The Floating Point System and the IEEE 754

IEEE 754 is a standard for normalizing so that the computer can represent real numbers from base-2 (binary). 
The binary system is used because it has a higher performance in dealing with calculations. <br><br>

## Principles and Fundamentals 

 ✅ - This repository is for the authors own teaching purposes and is definitely not a blog post.  

 ✅ - There is no lack of references on the Internet for understanding the problem.

 ✅ - Such that the goal is to experience these events as representation errors, precision, rounding, comparison and propagation. So that it is possible to understand in practice and implement alternatives.

 ✅ - **The language chosen for the practical exercise was Javascript. But, the phenomenon happens in most programming languages and development environments.**<br><br>

## The Numbers Dilemma 🤔♾
Given a range of values, we need to deal with the trade-off between representing as many values as possible and how to represent them accurately.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/IEEE754.svg/1280px-IEEE754.svg.png" alt="SinglePrecision and DoublePrecision From Wiki" width="500" height="500">


- The Double Precision system can store more values and with higher accuracy, since it has a higher capacity for significant digits (52 values) versus (23 vaulues) in single precision. 

- 5.25 in base-2

```javascript
> +(5.25).toString(2)
output: 101.01
```

## Representation Errors

- Just as we cannot represent the fractional value (1/3) in the decimal base such that the value is (0.333333333...). In the binary system, it is no different. In some cases it is impossible to represent a number with 100% accuracy.

- There is no such thing as infinite precision, since computer memory is finite.

- One technique for representing fractional numbers in binary is to work with negative powers of an integer. In this way, it is possible to represent fractional quantities of an integer. 

- The use of binary numbers increases the performance of the computer when doing calculations. If there is a need for coverage because of the sensitivity of exact values in a '$FOO' application, this challenge is in the hands of the developer.

- Since Javascript does not have a native decimal type like in Java (BigDecimal), a widely used alternative is to install libraries that can use a decimal of limited precision.

## References and Inspirations, so far: ⏳ 

- [📖IEEE754](https://en.wikipedia.org/wiki/IEEE_754)

- [📖Floating Point Guide - cheat sheet for JavaScript](https://floating-point-gui.de/languages/javascript/)

- [📖USP](http://www.astro.iag.usp.br/~carciofi/AGA0503/apostila_cap03.pdf)

- [📺YouTube Channel - Dias de Dev](https://www.youtube.com/watch?v=qeZloBkUf6M)

- [📺YouTube Channel - Prof. Rex Medeiros ECT/UFRN](https://www.youtube.com/watch?v=OVuyMcnPKOc)

- [📺YouTube Channel - Low Level Javascript](https://www.youtube.com/watch?v=wPBjd-vb9eI)<br><br>

## Feedback ⭐🚀
Learning in Public Method in the quest for better results. 📈<br><br>
[🔓 The fatest way to learn to the next level](https://www.swyx.io/learn-in-public/).<br><br>
💌 If you have any feedback, please reach out to us at leandro.barbosamkt@gmail.com
