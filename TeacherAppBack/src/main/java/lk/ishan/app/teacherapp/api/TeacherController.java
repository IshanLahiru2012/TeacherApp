package lk.ishan.app.teacherapp.api;

import lk.ishan.app.teacherapp.service.TeacherService;
import lk.ishan.app.teacherapp.to.TeacherReqTo;
import lk.ishan.app.teacherapp.to.TeacherTo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/teachers")
public class TeacherController {

    private final TeacherService teacherService;

    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<?> saveTeacher(@Validated @RequestBody TeacherReqTo teacherReqTo){
        TeacherTo teacherTo = teacherService.saveTeacher(teacherReqTo);
        return new ResponseEntity<>(teacherTo, HttpStatus.CREATED);
    }
    @GetMapping(produces = "application/json")
    public ResponseEntity<?> getTeachers(){
        List<TeacherTo> teachers = teacherService.getTeachers();
        return new ResponseEntity<>(teachers, HttpStatus.OK);
    }


}
