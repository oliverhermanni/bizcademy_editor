<?php
$f3->route('POST /addcourse', function($f3) {
    $request = $f3->get('BODY');
    $course = json_decode($request);
    $sql = "INSERT INTO courses (title, summary, advice) VALUES (:title, :summary, :advice)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("title", $course->title);
        $stmt->bindParam("summary", $course->summary);
        $stmt->bindParam("advice", $course->advice);
        $stmt->execute();
        $course->id = $db->lastInsertId();
        $db = null;
        echo json_encode($course);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('GET /getcourses', function() {
    $sql = "SELECT * FROM courses";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $courses = $stmt->fetchAll();
        echo json_encode($courses);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('DELETE /deletecourse/@course_id', function($f3, $params) {
    $sql = "DELETE FROM `courses` WHERE `id` = :id AND `protected` = FALSE";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $count = $stmt->execute(array(':id' => $params['course_id']));
        echo json_encode($count);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});


$f3->route('GET /getcourse/@courseid', function($f3, $params) {

    $sql = "SELECT * FROM `courses` WHERE `id` = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':id' => $params['courseid']));
        $course = $stmt->fetch();
        echo json_encode($course);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('POST /updatecourse/@courseid', function($f3, $params) {
    $request = $f3->get('BODY');
    $course = json_decode($request);
    $sql = "UPDATE courses SET `title` = :title, `summary` = :summary, `advice`= :advice WHERE id = :id;";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id", $params['courseid']);
        $stmt->bindParam("title", $course->title);
        $stmt->bindParam("summary", $course->summary);
        $stmt->bindParam("advice", $course->advice);
        $stmt->execute();
        $db = null;
        echo json_encode($course);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});
