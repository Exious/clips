(defrule first_to_second
(declare (salience -10))
?phase <- (phase first)
=>
(printout t "activated 1 ")
(retract ?phase)
(assert (phase second))
)
(defrule second_to_third
(declare (salience -10))
?phase <- (phase second)
=>
(printout t "activated 2 ")
(retract ?phase)
(assert (phase third))
)
(defrule third_to_finish
(declare (salience -10))
?phase <- (phase third)
=>
(printout t "activated 3 ")
(retract ?phase)
(assert (phase finish))
)

(defrule do-some-work
(phase second)
=>
(printout t "repairing...")
)
(assert (phase first))
(run)