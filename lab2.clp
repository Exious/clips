(deffunction ask-question (?question $?allowed-values)
   (printout t ?question)
   (bind ?answer (read))
   (if (lexemep ?answer) 
       then (bind ?answer (lowcase ?answer)))
   (while (not (member ?answer ?allowed-values)) do
      (printout t ?question)
      (bind ?answer (read))
      (if (lexemep ?answer) 
          then (bind ?answer (lowcase ?answer))))
   ?answer)

(deffunction yes-or-no-p (?question)
   (bind ?response (ask-question ?question yes no y n))
   (if (or (eq ?response yes) (eq ?response y))
       then yes 
       else no))

(defrule print-repair ""
  (declare (salience 10))
  (computer ?item)
  =>
  (printout t crlf crlf)
  (printout t "Suggested Computer configuration:")
  (printout t crlf crlf)
  (format t " %s%n%n%n" ?item))


(deftemplate GPU
    (slot price (type INTEGER))
    (slot videoMemory (type INTEGER))
    (slot architect (type STRING))
    (slot rayTracingSupport (type INTEGER))
    (slot memoryBusBandwidth (type INTEGER))
    (slot memoryClockFrequency (type INTEGER))
    (slot clockFrequency (type INTEGER))
)

(load-facts "lab2.facts.dat")