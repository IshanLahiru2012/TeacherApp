package lk.ishan.app.teacherapp.to;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TeacherReqTo {
    @NotNull(message = "Teacher name cannot be empty")
    private String name;
}
