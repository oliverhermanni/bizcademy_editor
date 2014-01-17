<?php
$f3->route('POST /addchapter', function($f3) {
    $request = $f3->get('BODY');
    $chapter = json_decode($request);
    $sql = "INSERT INTO chapters (course_id, title, summary, advice) VALUES (:course_id, :title, :summary, :advice)";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("course_id", $chapter->course_id);
        $stmt->bindParam("title", $chapter->title);
        $stmt->bindParam("summary", $chapter->summary);
        $stmt->bindParam("advice", $chapter->advice);
        $stmt->execute();
        $chapter->id = $db->lastInsertId();
        $db = null;
        echo json_encode($chapter);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('GET /getchapters/@course_id', function($f3, $params) {
    $sql = "SELECT * FROM `chapters` WHERE `course_id` = :course_id ";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':course_id' => $params['course_id']));
        $chapters = $stmt->fetchAll();
        for($i = 0; $i < count($chapters); $i++) {

             $chapters[$i]["modules"] = getModulesOfChapter($chapters[$i]["id"]);
        }
        echo json_encode($chapters);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('GET /getchapter/@chapter_id', function($f3, $params) {

    $sql = "SELECT * FROM `chapters` WHERE `id` = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':id' => $params['chapter_id']));
        $chapter = $stmt->fetch();
        echo json_encode($chapter);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('DELETE /deletechapter/@chapter_id', function($f3, $params) {
    $sql = "DELETE FROM `chapters` WHERE `id` = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $count = $stmt->execute(array(':id' => $params['chapter_id']));
        echo json_encode($count);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('POST /updatechapter/@courseid', function($f3, $params) {
    $request = $f3->get('BODY');
    $chapter = json_decode($request);
    $sql = "UPDATE chapters SET `title` = :title, `summary` = :summary, `advice`= :advice WHERE id = :id;";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->bindParam("id", $params['courseid']);
        $stmt->bindParam("title", $chapter->title);
        $stmt->bindParam("summary", $chapter->summary);
        $stmt->bindParam("advice", $chapter->advice);
        $stmt->execute();
        $db = null;
        echo json_encode($chapter);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

function getModulesOfChapter($chapterId) {
    $sql = "SELECT * FROM `modules` WHERE `chapter_id` = :chapter_id ";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':chapter_id' => $chapterId));
        $modules = $stmt->fetchAll();
        return $modules;
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}